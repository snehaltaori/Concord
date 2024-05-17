package com.concord.backend.email;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class EmailDetails {
    // Scaling needs to be done here
    private String recipient;
    private String msgBody;
    private String subject;
}
