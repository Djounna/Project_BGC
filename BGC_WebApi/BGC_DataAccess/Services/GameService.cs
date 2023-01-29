using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameService : BaseService, IGameService
{
    public GameService(BGCContext context) : base(context) { }

    public async Task<Game> GetById(int id)
    {
        return await BgcContext.Games.FindAsync(id);
    }

    public async Task<IEnumerable<Game>> GetAll()
    {
        return await BgcContext.Games.ToListAsync();
    }

    public async Task<bool> Insert(Game game)
    {
        BgcContext.Games.Add(game);
        return await BgcContext.SaveChangesAsync() >= 1;
    }

    public async Task<bool> Update(int id, Game game)
    {
        Game GameToUpdate = BgcContext.Games.Find(id);

        if (GameToUpdate != null)
        {
            GameToUpdate.Description = game.Description;
            GameToUpdate.Name = game.Name;
            GameToUpdate.MaxNumberPlayers = game.MaxNumberPlayers;
            GameToUpdate.MinNumberPlayers = game.MinNumberPlayers;
            GameToUpdate.ImageLink = game.ImageLink;
            GameToUpdate.Year = game.Year;

            return await BgcContext.SaveChangesAsync() >=1;
            
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        Game GameToDelete = BgcContext.Games.Find(id);
        if (GameToDelete != null)
        {
            BgcContext.Games.Remove(GameToDelete);
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }
}
