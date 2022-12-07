using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameSessionGameService
{
    bool Delete(int id);
    IEnumerable<GameSessionGame> GetAll();
    GameSessionGame GetById(int id);
    void Insert(GameSessionGame GameSessionGame);
    bool Update(int id, GameSessionGame GameSessionGame);
}