package sejong.dormitory.domain.board;

import lombok.*;
import sejong.dormitory.domain.board.comment.BoardComment;
import sejong.dormitory.domain.member.Member;
import sejong.dormitory.global.baseEntity.BaseEntity;
import sejong.dormitory.domain.board.photo.Photo;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class Board extends BaseEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "board",
            cascade = CascadeType.REMOVE,
            orphanRemoval = true)
    private List<BoardComment> boardCommentList = new ArrayList<>();

    @OneToMany(mappedBy = "board",
            cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<Photo> photo = new ArrayList<>();

    private String title;
    private String content;
    private Long countVisit;

    public void addPhoto(Photo photo) {
        this.photo.add(photo);

        // 게시글에 파일이 저장되어있지 않은 경우
        if(photo.getBoard() != this)
            // 파일 저장
            photo.setBoard(this);
    }


    @Builder
    public Board(String title, String content, Long countVisit, Member member,
                 List<BoardComment> boardCommentList,List<Photo> photo) {
        this.title = title;
        this.content = content;
        this.countVisit = countVisit;
        if (this.member != null) {
            member.getBoardList().remove(this);
        }
        this.boardCommentList = boardCommentList;
        this.photo = photo;
    }

    public void updateVisit(Long countVisit) {
        this.countVisit = countVisit;
    }

    public void update(String title, String content, List<Photo> photo)
    {
        this.title = title;
        this.content = content;
        this.photo = photo;
    }

    public Board(Member member,String title, String content, Long countVisit) {
        this.member = member;
        this.title = title;
        this.content = content;
        this.countVisit =countVisit;
    }


}
