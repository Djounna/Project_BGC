using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IRpgSessionGameService
{
    Task<bool> Delete(int id); 
    Task<IEnumerable<RpgSessionGame>> GetAll(); 
    Task<RpgSessionGame> GetById(int id); 
    Task<bool> Insert(RpgSessionGame RpgSessionGame); 
    Task<bool> Update(int id, RpgSessionGame RpgSessionGame);
}