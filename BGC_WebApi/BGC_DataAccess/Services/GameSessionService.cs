using BGC_DataAccess.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameSessionService : BaseService
{
    public GameSessionService(BGCContext context) : base(context) { }

    public GameSession GetById(int id)
    {
        return BgcContext.GameSessions.Find(id);
    }

    public IEnumerable<GameSession> GetAll()
    {
        return BgcContext.GameSessions.ToList();
    }

    public void Insert(GameSession gameSession)
    {
        BgcContext.GameSessions.Add(gameSession);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, GameSession gameSession)
    {
        GameSession GameSessionToUpdate = BgcContext.GameSessions.Find(id);

        if (GameSessionToUpdate != null)
        {
            GameSessionToUpdate.Description = gameSession.Description;
            GameSessionToUpdate.Name = gameSession.Name;
            GameSessionToUpdate.MaxNumberPlayers = gameSession.MaxNumberPlayers;
            GameSessionToUpdate.MinNumberPlayers = gameSession.MinNumberPlayers;

            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        GameSession GameSessionToDelete = BgcContext.GameSessions.Find(id);
        if (GameSessionToDelete != null)
        {
            BgcContext.GameSessions.Remove(GameSessionToDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
