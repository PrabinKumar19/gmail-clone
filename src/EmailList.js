import React, { useEffect, useState } from "react";
import { Checkbox, IconButton } from "@mui/material";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import Section from "./Section";
import "./EmailList.css";
import EmailRow from "./EmailRow";
import { db } from "./Firebase";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  console.log(emails);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
        <EmailRow
          title={"Test"}
          subject={"Subject"}
          description={"Yes this is the message"}
          time={"10pm"}
        />
      </div>
    </div>
  );
}

export default EmailList;
