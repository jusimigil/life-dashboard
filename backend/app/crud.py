from .models import cursor, db
from datetime import date

def save_daily_tasks(tasks):
    today = date.today()
    cursor.execute("""
        INSERT INTO daily_tasks
        VALUES (%s,%s,%s,%s,%s,%s,%s)
        ON DUPLICATE KEY UPDATE
            move=%s, study=%s, uncomfortable=%s,
            regulate=%s, finance=%s, connect=%s
    """, (
        today,
        tasks['move'], tasks['study'], tasks['uncomfortable'],
        tasks['regulate'], tasks['finance'], tasks['connect'],
        tasks['move'], tasks['study'], tasks['uncomfortable'],
        tasks['regulate'], tasks['finance'], tasks['connect']
    ))
    db.commit()
