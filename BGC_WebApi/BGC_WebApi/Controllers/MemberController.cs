using AutoMapper;
using BGC_BusinessLogic.Services;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for Members
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class MemberController : BaseController
{
    private IMemberService memberService;
    private MemberBLL memberBLL;

    public MemberController(IMemberService memberService, MemberBLL memberBll, IMapper mapper) : base(mapper)
    {
        this.memberService = memberService;
        this.memberBLL = memberBll;
    }

    /// <summary>
    /// Get All Members
    /// </summary>
    [HttpGet]

    public async Task<ActionResult<IEnumerable<MemberDTO>>> GetAll()
    {
        return Ok(mapper.Map<IEnumerable<MemberDTO>>(await memberService.GetAll()));
    }

    /// <summary>
    /// Get Member By Id
    /// </summary>
    [HttpGet]
    [Route("{id}")]
    public async Task<ActionResult<MemberDTO>> GetById(int id)
    {
        return Ok(mapper.Map<MemberDTO>(await memberService.GetById(id)));
    }

    /// <summary>
    /// Get Member by email
    /// </summary>
    /// <param name="email">Email</param>
    [HttpGet]
    [Route("{email}")]
    [EnableCors("_myAllowSpecificOrigins")]
    public async Task<ActionResult<MemberDTO>> GetByEmail(string email)
    {
        return Ok(mapper.Map<MemberDTO>(await memberService.GetByEmail(email)));
    }

    /// <summary>
    /// Get Member by name
    /// </summary>
    /// <param name="name">Name</param>
    [HttpGet]
    [Route("{name}")]
    public async Task<ActionResult<MemberDTO>> GetByName(string name)
    {
        return Ok(mapper.Map<MemberDTO>(await memberService.GetByName(name)));
    }
    /// <summary>
    /// Create a new Member
    /// </summary>
    /// <param name="MemberDTO">DTO for member</param>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] MemberDTO MemberDTO)
    {
        await memberService.Insert(mapper.Map<Member>(MemberDTO));
        return Ok();
    }

    /// <summary>
    ///  Update a Member
    /// </summary>
    /// <param name="id">Id</param>
    /// <param name="MemberDTO">DTO for member</param>
    [HttpPut]
    public async Task<ActionResult> Put(int id, [FromBody] MemberDTO MemberDTO)
    {
        await memberService.Update(id, mapper.Map<Member>(MemberDTO));
        return Ok();
    }

    /// <summary>
    /// Delete a Member
    /// </summary>
    [HttpDelete]
    public void Delete(int id)
    {
        // 
    }

    /// <summary>
    /// Checks if user exists in DB and creates it if necessary
    /// </summary>
    /// <param name="memberDTO">Member DTO</param>
    [HttpPost]
    [Route("CheckUserExists")]
    public async Task<ActionResult<bool>> CheckUserExists([FromBody]MemberDTO memberDTO)
    {
        if (await memberBLL.CheckAndCreateUser(mapper.Map<Member>(memberDTO)))
        {
            return Ok(true);
        }
        return Ok(false);
    }

}
