using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameSessionGameService : BaseService, IGameSessionGameService
{
    public GameSessionGameService(BGCContext context) : base(context) { }

    public async Task<GameSessionGame> GetById(int id)
    {
        return await BgcContext.GameSessionGames.FindAsync(id);
    }

    public async Task<IEnumerable<GameSessionGame>> GetAll()
    {
        return await BgcContext.GameSessionGames.ToListAsync();
    }

    public async Task<bool> Insert(GameSessionGame GameSessionGame)
    {
        BgcContext.GameSessionGames.Add(GameSessionGame);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, GameSessionGame GameSessionGame)
    {
        GameSessionGame toUpdate = await BgcContext.GameSessionGames.FindAsync(id);

        if (toUpdate != null)
        {
            // TO DO
            return await BgcContext.SaveChangesAsync() >=1;
            
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        GameSessionGame toDelete = await BgcContext.GameSessionGames.FindAsync(id);
        if (toDelete != null)
        {
            BgcContext.GameSessionGames.Remove(toDelete);
            return await BgcContext.SaveChangesAsync() >=1;
           ;
        }
        return false;
    }
}
