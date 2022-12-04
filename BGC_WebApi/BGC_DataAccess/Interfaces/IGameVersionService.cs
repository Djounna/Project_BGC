using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IGameVersionService
{
    bool Delete(int id);
    IEnumerable<GameVersion> GetAll();
    GameVersion GetById(int id);
    void Insert(GameVersion gameVersion);
    bool Update(int id, GameVersion gameVersion);
}