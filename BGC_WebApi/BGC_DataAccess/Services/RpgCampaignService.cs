using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class RpgCampaignService : BaseService, IRpgCampaignService
{
    public RpgCampaignService(BGCContext context) : base(context) { }

    public async Task<RpgCampaign> GetById(int id)
    {
        return await BgcContext.RpgCampaigns.FindAsync(id);
    }

    public async Task<IEnumerable<RpgCampaign>> GetAll()
    {
        return await BgcContext.RpgCampaigns.ToListAsync();
    }

    public async Task<bool> Insert(RpgCampaign RpgCampaign)
    {
        BgcContext.RpgCampaigns.Add(RpgCampaign);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, RpgCampaign RpgCampaign)
    {
        RpgCampaign toUpdate = await BgcContext.RpgCampaigns.FindAsync(id);

        if (toUpdate != null)
        {
            // TO DO
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        RpgCampaign toDelete = await BgcContext.RpgCampaigns.FindAsync(id);
        if (toDelete != null)
        {
            BgcContext.RpgCampaigns.Remove(toDelete);
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }
}
