package sejong.dormitory.domain.board.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import sejong.dormitory.domain.board.comment.BoardComment;
import sejong.dormitory.domain.board.comment.BoardCommentDto;
import sejong.dormitory.domain.board.comment.BoardCommentRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BoardCommentService {

    private final BoardCommentRepository boardCommentRepository;

    @Transactional
    public void saveBoardComment(BoardCommentDto dto){
        boardCommentRepository.save(dto.toEntity());
    }

    @Transactional
    public void updateComment(Long id, BoardCommentDto boardCommentDto){

        BoardComment boardComment = boardCommentRepository.findById(id).orElseThrow((() ->
                new IllegalStateException("해당 댓글이 존재하지 않습니다.")));
        boardComment.update(boardCommentDto.getContent());
    }

    @Transactional
    public void deleteBoardComment(Long id){
        boardCommentRepository.deleteById(id);
    }

    public List<BoardComment> findBoardCommentsByBoardId(Long id){
        return boardCommentRepository.findBoardCommentsByBoardId(id);
    }

    public BoardComment findById(Long id){
        return boardCommentRepository.findById(id).get();
    }
}
