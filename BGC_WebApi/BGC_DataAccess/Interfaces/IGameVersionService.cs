using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameVersionService
{
    Task<bool> Delete(int id); 
    Task<IEnumerable<GameVersion>> GetAll(); 
    Task<GameVersion> GetById(int id); 
    Task<bool> Insert(GameVersion gameVersion); 
    Task<bool> Update(int id, GameVersion gameVersion);
}