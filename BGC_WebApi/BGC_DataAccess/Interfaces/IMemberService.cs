using BGC_DataAccess.Entities;

namespace BGC_DataAccess.Interfaces;
public interface IMemberService
{
    Task<Member> GetById(int id);
    Task<IEnumerable<Member>> GetAll();
    Task<bool> Insert(Member member);
    Task<bool> Update(int id, Member member);
    Task<bool> Delete(int id);
}