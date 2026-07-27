#!/bin/bash

# ==============================================================================
# Script Deploy Otomatis via Cron (Pull-based Deployment)
# ==============================================================================

# 1. Tentukan path ke folder proyek Anda
PROJECT_DIR="/home/ubuntu/Daya-Solusi-Integra"
BRANCH="main"

# 2. Masuk ke direktori proyek
cd "$PROJECT_DIR" || { echo "Gagal masuk ke folder proyek"; exit 1; }

# 3. Muat environment Node.js & PM2 (penting untuk cron environment)
export PATH="/home/ubuntu/.nvm/versions/node/v20.20.2/bin:$PATH"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use v20.20.2 > /dev/null 2>&1

# Pastikan git, npm, dan pm2 dapat diakses
if ! command -v git &> /dev/null || ! command -v npm &> /dev/null || ! command -v pm2 &> /dev/null; then
    echo "$(date): Error - git, npm, atau pm2 tidak ditemukan di PATH." >> deploy.log
    exit 1
fi

# 4. Ambil informasi terbaru dari GitHub
git fetch origin "$BRANCH"

# 5. Cek apakah ada perubahan baru di remote repository
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse "origin/$BRANCH")

if [ "$LOCAL" != "$REMOTE" ]; then
    echo "$(date): Perubahan baru terdeteksi. Memulai proses deploy..." >> deploy.log
    
    # Tarik kode terbaru
    git reset --hard "origin/$BRANCH" >> deploy.log 2>&1
    
    # Pasang dependensi
    npm install >> deploy.log 2>&1
    
    # Build proyek
    npm run build >> deploy.log 2>&1
    
    # Reload aplikasi via PM2 (Menggunakan ecosystem config jika ada, atau nama aplikasi)
    if [ -f "ecosystem.config.cjs" ]; then
        pm2 reload ecosystem.config.cjs --env production >> deploy.log 2>&1
    else
        pm2 reload all >> deploy.log 2>&1
    fi
    
    echo "$(date): Deploy berhasil diselesaikan!" >> deploy.log
else
    # Keluar tanpa melakukan apa-apa jika tidak ada perubahan
    exit 0
fi
