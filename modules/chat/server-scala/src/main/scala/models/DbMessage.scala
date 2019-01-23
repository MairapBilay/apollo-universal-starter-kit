package models

import java.sql.Timestamp

import akka.http.scaladsl.model.DateTime
import com.byteslounge.slickrepo.meta.Entity

case class DbMessage(
    id: Option[Int],
    text: String,
    userId: Int,
    uuid: String,
    quotedId: Int,
    createdAt: Timestamp = new Timestamp(DateTime.now.clicks),
    updatedAt: Timestamp = new Timestamp(DateTime.now.clicks)
) extends Entity[DbMessage, Int] {

  override def withId(id: Int): DbMessage = this.copy(id = Some(id))
}
