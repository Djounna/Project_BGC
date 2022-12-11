async using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameTableService : BaseService, IGameTableService
{
    public GameTableService(BGCContext context) : base(context) { }


    public async Task<GameTable> GetById(int id)
    {
        return BgcContext.GameTables.Find(id);
    }

    public async Task<IEnumerable<GameTable>> GetAll()
    {
        return await BgcContext.GameTables.ToListAsync();
    }

    public async Task<bool> Insert(GameTable gameTable)
    {
        BgcContext.GameTables.Add(gameTable);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, GameTable gameTable)
    {
        GameTable toUpdate = await BgcContext.GameTables.FindAsync(id);

        if (toUpdate != null)
        {
            // TO DO
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        GameTable toDelete = await BgcContext.GameTables.FindAsync(id);
        if (toDelete != null)
        {
            BgcContext.GameTables.Remove(toDelete);
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }
}
