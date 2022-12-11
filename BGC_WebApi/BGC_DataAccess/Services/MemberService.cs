using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BGC_DataAccess.Services;
public class MemberService : BaseService, IMemberService
{
    public MemberService(BGCContext context) : base(context) { }

    public async Task<Member> GetById(int id)
    {
        return await BgcContext.Members.FindAsync(id);
    }

    public async Task<IEnumerable<Member>> GetAll()
    {
        return await BgcContext.Members.ToListAsync();
    }

    public async Task<bool> Insert(Member member)
    {
        BgcContext.Members.Add(member);
        return await BgcContext.SaveChangesAsync() >=1;
    }

    public async Task<bool> Update(int id, Member member)
    {
        Member toUpdate = await BgcContext.Members.FindAsync(id);

        if (toUpdate != null)
        {
            //memberToUpdate.Role = member.Role;
            //memberToUpdate.Name = member.Name;
            toUpdate.Email = member.Email;
            //memberToUpdate.Password = member.Password;

            //BgcContext.Members.Update(member); // Not necessary
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }

    public async Task<bool> Delete(int id)
    {
        Member toDelete = await BgcContext.Members.FindAsync(id);
        if (toDelete != null)
        {
            BgcContext.Members.Remove(toDelete);
            return await BgcContext.SaveChangesAsync() >=1;
        }
        return false;
    }


}
