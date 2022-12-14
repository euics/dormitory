package sejong.dormitory.domain.map.dormitoryPageEntity;

import lombok.*;
import sejong.dormitory.global.baseEntity.BaseEntity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
@Builder
@ToString
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class TamLa extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String facility;
    private String context;

    private String imagePath;
    private String detailImagePath;
}
