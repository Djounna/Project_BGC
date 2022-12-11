using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class RpgCampaignRegistrationService : BaseService, IRpgCampaignRegistrationService
{
    public RpgCampaignRegistrationService(BGCContext context) : base(context) { }

    public async Task<RpgCampaignRegistration> GetById(int id)
    {
        return await BgcContext.RpgCampaignRegistrations.FindAsync(id);
    }

    public async Task<IEnumerable<RpgCampaignRegistration>> GetAll()
    {
        return await BgcContext.RpgCampaignRegistrations.ToListAsync();
    }

    public async Task<bool> Insert(RpgCampaignRegistration RpgCampaignRegistration)
    {
        BgcContext.RpgCampaignRegistrations.Add(RpgCampaignRegistration);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, RpgCampaignRegistration RpgCampaignRegistration)
    {
        RpgCampaignRegistration toUpdate = await BgcContext.RpgCampaignRegistrations.FindAsync(id);

        if (toUpdate != null)
        {
            // TO DO
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        RpgCampaignRegistration toDelete = await BgcContext.RpgCampaignRegistrations.FindAsync(id);
        if (toDelete != null)
        {
            BgcContext.RpgCampaignRegistrations.Remove(toDelete);
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }
}
