package de.neuefische.todobackend.security.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "appusers")
public class AppUser {

    @Id
    private String username;
    private String password;

}
