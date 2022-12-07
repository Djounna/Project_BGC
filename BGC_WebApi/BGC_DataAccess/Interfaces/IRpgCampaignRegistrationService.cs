using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IRpgCampaignRegistrationService
{
    bool Delete(int id);
    IEnumerable<RpgCampaignRegistration> GetAll();
    RpgCampaignRegistration GetById(int id);
    void Insert(RpgCampaignRegistration RpgCampaignRegistration);
    bool Update(int id, RpgCampaignRegistration RpgCampaignRegistration);
}