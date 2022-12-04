using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class RpgCampaignService : BaseService, IRpgCampaignService
{
    public RpgCampaignService(BGCContext context) : base(context) { }

    public RpgCampaign GetById(int id)
    {
        return BgcContext.RpgCampaigns.Find(id);
    }

    public IEnumerable<RpgCampaign> GetAll()
    {
        return BgcContext.RpgCampaigns.ToList();
    }

    public void Insert(RpgCampaign RpgCampaign)
    {
        BgcContext.RpgCampaigns.Add(RpgCampaign);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, RpgCampaign RpgCampaign)
    {
        RpgCampaign toUpdate = BgcContext.RpgCampaigns.Find(id);

        if (toUpdate != null)
        {
            // TO DO


            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }

    public bool Delete(int id)
    {
        RpgCampaign toDelete = BgcContext.RpgCampaigns.Find(id);
        if (toDelete != null)
        {
            BgcContext.RpgCampaigns.Remove(toDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
