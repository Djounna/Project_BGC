using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameService
{
    Task<bool> Delete(int id);
    Task<IEnumerable<Game>> GetAll();
    Task<Game> GetById(int id);
    Task<bool> Insert(Game game);
    Task<bool> Update(int id, Game game);
}