using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class RpgSessionService : BaseService, IRpgSessionService
{
    public RpgSessionService(BGCContext context) : base(context) { }

    public async Task<RpgSession> GetById(int id)
    {
        return await BgcContext.RpgSessions.FindAsync(id);
    }

    public async Task<IEnumerable<RpgSession>> GetAll()
    {
        return await BgcContext.RpgSessions.ToListAsync();
    }

    public async Task<bool> Insert(RpgSession RpgSession)
    {
        BgcContext.RpgSessions.Add(RpgSession);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, RpgSession RpgSession)
    {
        RpgSession toUpdate = await BgcContext.RpgSessions.FindAsync(id);

        if (toUpdate != null)
        {
            // TO DO
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        RpgSession toDelete = await BgcContext.RpgSessions.FindAsync(id);
        if (toDelete != null)
        {
            BgcContext.RpgSessions.Remove(toDelete);
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }
}
