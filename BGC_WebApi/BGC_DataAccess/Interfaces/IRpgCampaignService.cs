using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IRpgCampaignService
{
    bool Delete(int id);
    IEnumerable<RpgCampaign> GetAll();
    RpgCampaign GetById(int id);
    void Insert(RpgCampaign RpgCampaign);
    bool Update(int id, RpgCampaign RpgCampaign);
}