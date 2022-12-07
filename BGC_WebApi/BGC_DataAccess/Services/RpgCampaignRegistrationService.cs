using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class RpgCampaignRegistrationService : BaseService, IRpgCampaignRegistrationService
{
    public RpgCampaignRegistrationService(BGCContext context) : base(context) { }

    public RpgCampaignRegistration GetById(int id)
    {
        return BgcContext.RpgCampaignRegistrations.Find(id);
    }

    public IEnumerable<RpgCampaignRegistration> GetAll()
    {
        return BgcContext.RpgCampaignRegistrations.ToList();
    }

    public void Insert(RpgCampaignRegistration RpgCampaignRegistration)
    {
        BgcContext.RpgCampaignRegistrations.Add(RpgCampaignRegistration);
        BgcContext.SaveChanges();
    }

    public bool Update(int id, RpgCampaignRegistration RpgCampaignRegistration)
    {
        RpgCampaignRegistration toUpdate = BgcContext.RpgCampaignRegistrations.Find(id);

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
        RpgCampaignRegistration toDelete = BgcContext.RpgCampaignRegistrations.Find(id);
        if (toDelete != null)
        {
            BgcContext.RpgCampaignRegistrations.Remove(toDelete);
            BgcContext.SaveChanges();
            return true;
        }
        return false;
    }
}
