using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameSessionRegistrationService
{
    bool Delete(int id);
    IEnumerable<GameSessionRegistration> GetAll();
    GameSessionRegistration GetById(int id);
    void Insert(GameSessionRegistration gameSessionRegistration);
    bool Update(int id, GameSessionRegistration gameSessionRegistration);
}