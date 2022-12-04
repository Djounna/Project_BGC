using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameSessionService
{
    bool Delete(int id);
    IEnumerable<GameSession> GetAll();
    GameSession GetById(int id);
    void Insert(GameSession gameSession);
    bool Update(int id, GameSession gameSession);
}