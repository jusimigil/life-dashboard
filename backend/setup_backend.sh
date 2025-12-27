#!/bin/bash

# 1. Create virtual environment
python3 -m venv venv
echo "Virtual environment created."

# 2. Activate virtual environment
source venv/bin/activate
echo "Virtual environment activated."

# 3. Upgrade pip
pip install --upgrade pip

# 4. Install required packages
pip install fastapi uvicorn mysql-connector-python python-dotenv
echo "Dependencies installed."

# 5. Create .env template if it doesn't exist
ENV_FILE=".env"
if [ ! -f "$ENV_FILE" ]; then
cat <<EOT >> $ENV_FILE
DB_HOST=localhost
DB_USER=tracker_user
DB_PASSWORD=tracker_pass
DB_NAME=tracker
EOT
echo ".env file created."
else
echo ".env file already exists."
fi

# 6. Start the FastAPI server
echo "Starting FastAPI server..."
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
