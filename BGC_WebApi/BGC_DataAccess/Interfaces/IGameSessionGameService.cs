using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameSessionGameService
{
    Task<bool> Delete(int id);
    Task<IEnumerable<GameSessionGame>> GetAll();
    Task<GameSessionGame> GetById(int id);
    Task<bool> Insert(GameSessionGame GameSessionGame);
    Task<bool> Update(int id, GameSessionGame GameSessionGame);
}