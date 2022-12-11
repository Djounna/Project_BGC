using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameSessionService : BaseService, IGameSessionService
{
    public GameSessionService(BGCContext context) : base(context) { }

    public async Task<GameSession> GetById(int id)
    {
        return await BgcContext.GameSessions.FindAsync(id);
    }

    public async Task<IEnumerable<GameSession>> GetAll()
    {
        return await  BgcContext.GameSessions.ToListAsync();
    }

    public async Task<bool> Insert(GameSession gameSession)
    {
        BgcContext.GameSessions.Add(gameSession);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, GameSession gameSession)
    {
        GameSession toUpdate = await BgcContext.GameSessions.FindAsync(id);

        if (toUpdate != null)
        {
            toUpdate.Description = gameSession.Description;
            toUpdate.Name = gameSession.Name;
            toUpdate.MaxNumberPlayers = gameSession.MaxNumberPlayers;
            toUpdate.MinNumberPlayers = gameSession.MinNumberPlayers;

            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        GameSession toDelete = await BgcContext.GameSessions.FindAsync(id);
        if (toDelete != null)
        {
           BgcContext.GameSessions.Remove(toDelete);
           return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }
}
