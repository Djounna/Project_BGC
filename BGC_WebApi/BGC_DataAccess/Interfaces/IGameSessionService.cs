using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameSessionService
{
    Task<bool> Delete(int id); 
    Task<IEnumerable<GameSession>> GetAll(); 
    Task<GameSession> GetById(int id); 
    Task<bool> Insert(GameSession gameSession); 
    Task<bool> Update(int id, GameSession gameSession);
}