using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameSessionService : BaseService, IGameSessionService
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
        GameSession toUpdate = BgcContext.GameSessions.Find(id);

        if (toUpdate != null)
        {
            toUpdate.Description = gameSession.Description;
            toUpdate.Name = gameSession.Name;
            toUpdate.MaxNumberPlayers = gameSession.MaxNumberPlayers;
            toUpdate.MinNumberPlayers = gameSession.MinNumberPlayers;

            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        GameSession toDelete = BgcContext.GameSessions.Find(id);
        if (toDelete != null)
        {
            BgcContext.GameSessions.Remove(toDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
