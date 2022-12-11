using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameSessionRegistrationService
{
    Task<bool> Delete(int id); 
    Task<IEnumerable<GameSessionRegistration>> GetAll(); 
    Task<GameSessionRegistration> GetById(int id); 
    Task<bool> Insert(GameSessionRegistration gameSessionRegistration); 
    Task<bool> Update(int id, GameSessionRegistration gameSessionRegistration);
}