using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IRpgSessionService
{
    Task<bool> Delete(int id); 
    Task<IEnumerable<RpgSession>> GetAll(); 
    Task<RpgSession> GetById(int id); 
    Task<bool> Insert(RpgSession RpgSession); 
    Task<bool> Update(int id, RpgSession RpgSession);
}