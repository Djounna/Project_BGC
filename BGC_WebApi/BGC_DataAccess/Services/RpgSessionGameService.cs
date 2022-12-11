using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class RpgSessionGameService : BaseService, IRpgSessionGameService
{
    public RpgSessionGameService(BGCContext context) : base(context) { }

    public async Task<RpgSessionGame> GetById(int id)
    {
        return BgcContext.RpgSessionGames.Find(id);
    }

    public async Task<IEnumerable<RpgSessionGame>> GetAll()
    {
        return BgcContext.RpgSessionGames.ToList();
    }

    public async Task<bool> Insert(RpgSessionGame RpgSessionGame)
    {
        BgcContext.RpgSessionGames.Add(RpgSessionGame);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, RpgSessionGame RpgSessionGame)
    {
        RpgSessionGame toUpdate = await BgcContext.RpgSessionGames.FindAsync(id);

        if (toUpdate != null)
        {
            // TO DO
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        RpgSessionGame toDelete = BgcContext.RpgSessionGames.Find(id);
        if (toDelete != null)
        {
            BgcContext.RpgSessionGames.Remove(toDelete);
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }
}
