using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IRpgCampaignService
{
    Task<bool> Delete(int id); 
    Task<IEnumerable<RpgCampaign>> GetAll(); 
    Task<RpgCampaign> GetById(int id); 
    Task<bool> Insert(RpgCampaign RpgCampaign); 
    Task<bool> Update(int id, RpgCampaign RpgCampaign);
}