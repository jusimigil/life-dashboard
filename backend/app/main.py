from fastapi import FastAPI
from app.schemas import DailyTasks, FinanceLog
from app.crud import save_daily_tasks

app = FastAPI()

@app.post("/daily-tasks")
def create_daily_tasks(tasks: DailyTasks):
    save_daily_tasks(tasks.dict())
    return {"message": "Tasks saved successfully"}
