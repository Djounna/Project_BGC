using AutoMapper;
using BGC_DataAccess.Entities;
using BGC_DataAccess.Interfaces;
using BGC_DataAccess.Services;
using BGC_WebApi.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BGC_WebApi.Controllers;

/// <summary>
/// Controller for Members
/// </summary>
[Authorize]
[Route("api/[controller]")]
[ApiController]
public class MemberController : BaseController
{
    private IMemberService memberService;

    public MemberController(IMemberService memberService, IMapper mapper) : base(mapper)
    {
        this.memberService = memberService;  
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
    /// Create a new Member
    /// </summary>
    [HttpPost]
    public async Task<ActionResult> Post([FromBody] MemberDTO MemberDTO)
    {
        await memberService.Insert(mapper.Map<Member>(MemberDTO));
        return Ok();
    }


    /// <summary>
    ///  Update a Member
    /// </summary>
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
}
