using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IRpgCampaignRegistrationService
{
    Task<bool> Delete(int id); 
    Task<IEnumerable<RpgCampaignRegistration>> GetAll(); 
    Task<RpgCampaignRegistration> GetById(int id); 
    Task<bool> Insert(RpgCampaignRegistration RpgCampaignRegistration); 
    Task<bool> Update(int id, RpgCampaignRegistration RpgCampaignRegistration);
}