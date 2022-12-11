using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameVersionService : BaseService, IGameVersionService
{
    public GameVersionService(BGCContext context) : base(context) { }


    public async Task<GameVersion> GetById(int id)
    {
        return await BgcContext.GameVersions.FindAsync(id);
    }

    public async Task<IEnumerable<GameVersion>> GetAll()
    {
        return await BgcContext.GameVersions.ToListAsync();
    }

    public async Task<bool> Insert(GameVersion gameVersion)
    {
        BgcContext.GameVersions.Add(gameVersion);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, GameVersion gameVersion)
    {
        GameVersion toUpdate = await BgcContext.GameVersions.FindAsync(id);

        if (toUpdate != null)
        {
            //TO DO
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        GameVersion toDelete = await BgcContext.GameVersions.FindAsync(id);
        if (toDelete != null)
        {
            BgcContext.GameVersions.Remove(toDelete);
            return await BgcContext.SaveChangesAsync() >= 1;
        }
        return false;
    }
}
