package sejong.dormitory.domain.board.comment;

import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import sejong.dormitory.domain.board.BoardService;
import sejong.dormitory.domain.board.Board;
import sejong.dormitory.domain.member.Member;
import sejong.dormitory.domain.member.MemberService;

@Controller
@AllArgsConstructor
@RequestMapping("/boards")
public class BoardCommentController {

    private final MemberService memberService;
    private final BoardService boardService;
    private final BoardCommentService boardCommentService;

    @PostMapping("/post/{id}")
    public String addBoardComment(@PathVariable("id") Long id,
                             @RequestParam String content,
                             Authentication authentication) {

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String username = userDetails.getUsername();

        Member member = memberService.findByUsername(username);
        Board board = boardService.findById(id);


        BoardCommentDto boardCommentDto = BoardCommentDto.builder()
                .content(content)
                .board(board)
                .member(member)
                .build();

        boardCommentService.saveBoardComment(boardCommentDto);

        return "redirect:/boards/post/"+id;
    }

    /** λκΈ μμ  GetMapping
    @GetMapping("/editBoardComment/{id}")
    public String editBoardComment(@PathVariable("id") Long id,
                                   @RequestParam Long commentId,
                                   Authentication authentication) throws Exception {
        try {
            UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        } catch (Exception e){
            return "login/login";
        }
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String username = userDetails.getUsername();
        Member member = memberService.findByUsername(username);

        BoardComment boardComment = boardCommentService.findById(commentId);
        if(!boardComment.getCreatedBy().equals(member.getNickname()))
            throw new Exception("μμ  κΆνμ΄ μμ΅λλ€.");
        return "board/boardContent";
    }
     */

    /** λκΈ μμ  PostMapping
    @PostMapping("/editBoardComment/{id}")
    public String editBoardComment(@PathVariable("id") Long id,
                                   @ModelAttribute BoardCommentDto boardCommentDto) throws Exception{
        Long boardCommentId = null;
        List<BoardComment> comments = boardCommentService.findBoardCommentsByBoardId(id);
        for (BoardComment comment : comments) {
            if (comment.getContent().equals(boardCommentDto.getContent())) {
                boardCommentId = comment.getId();
            }
        }
        if(boardCommentId.equals(null)){
            throw new Exception("λκΈμ΄ μ‘΄μ¬νμ§ μμ΅λλ€.");
        }

        boardCommentService.updateComment(boardCommentId,boardCommentDto);
        return "redirect:/board/boardContent/"+ id;
    }
    */

    @GetMapping("/deleteBoardComment/{id}")
    public String deleteBoardComment(@PathVariable("id") Long id,
                                     @RequestParam(value = "commentId") Long boardCommentId,
                                     Authentication authentication
    ) throws Exception{

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        String username = userDetails.getUsername();
        Member member = memberService.findByUsername(username);
        BoardComment boardComment = boardCommentService.findById(boardCommentId);

        if(boardComment.equals(null)){
            throw new Exception("λκΈμ΄ μ‘΄μ¬νμ§ μμ΅λλ€.");
        }
        if(!member.getUsername().equals(boardComment.getCreatedBy())){
            throw new Exception("μ­μ  κΆνμ΄ μμ΅λλ€.");
        }
        boardCommentService.deleteBoardComment(boardCommentId);
        return "redirect:/boards/post/" + id;
    }

}
