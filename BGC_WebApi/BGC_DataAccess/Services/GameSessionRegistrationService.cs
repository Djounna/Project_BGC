using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class GameSessionRegistrationService : BaseService, IGameSessionRegistrationService
{
    public GameSessionRegistrationService(BGCContext context) : base(context) { }

    public async Task<GameSessionRegistration> GetById(int id)
    {
        return await BgcContext.GameSessionRegistrations.FindAsync(id);
    }

    public async Task<IEnumerable<GameSessionRegistration>> GetAll()
    {
        return await BgcContext.GameSessionRegistrations.ToListAsync();
    }

    public async Task<IEnumerable<GameSessionRegistration>> GetAllByMemberId(int memberId)
    {
        return await BgcContext.GameSessionRegistrations.Where(g => g.MemberId == memberId).ToListAsync();
    }

    //public async Task<IEnumerable<GameSessionRegistration>> GetAllByMemberId(int memberId)
    //{
    //    var res = await BgcContext.Members.Where(m => m.MemberId == memberId).Include(m => m.GameSessionRegistrations).ToListAsync();

    //    return res;
    //}

    public async Task<bool> Insert(GameSessionRegistration gameSessionRegistration)
    {
        BgcContext.GameSessionRegistrations.Add(gameSessionRegistration);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, GameSessionRegistration gameSessionRegistration)
    {
        GameSessionRegistration ToUpdate = BgcContext.GameSessionRegistrations.Find(id);

        if (ToUpdate != null)
        {
            ToUpdate.GameSessionId = gameSessionRegistration.GameSessionId;
            ToUpdate.MemberId = gameSessionRegistration.MemberId;

            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        GameSessionRegistration ToDelete = await BgcContext.GameSessionRegistrations.FindAsync(id);
        if (ToDelete != null)
        {
            BgcContext.GameSessionRegistrations.Remove(ToDelete);
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }
}
