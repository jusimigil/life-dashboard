from pydantic import BaseModel
from typing import List

class DailyTasks(BaseModel):
    move: bool
    study: bool
    uncomfortable: bool
    regulate: bool
    finance: bool
    connect: bool

class FinanceLog(BaseModel):
    amount_spent: float
    saved: bool
