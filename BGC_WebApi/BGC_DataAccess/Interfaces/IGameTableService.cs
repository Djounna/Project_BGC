using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameTableService
{
    Task<bool> Delete(int id); 
    Task<IEnumerable<GameTable>> GetAll(); 
    Task<GameTable> GetById(int id); 
    Task<bool> Insert(GameTable gameTable); 
    Task<bool> Update(int id, GameTable gameTable);
}