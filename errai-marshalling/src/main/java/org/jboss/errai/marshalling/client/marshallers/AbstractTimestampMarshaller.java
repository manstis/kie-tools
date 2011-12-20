/*
 * Copyright 2011 JBoss, by Red Hat, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *  
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.jboss.errai.marshalling.client.marshallers;

import org.jboss.errai.common.client.protocols.SerializationParts;
import org.jboss.errai.marshalling.client.api.Marshaller;
import org.jboss.errai.marshalling.client.api.MarshallingSession;

import java.sql.Timestamp;

/**
 * @author Mike Brock
 */
public abstract class AbstractTimestampMarshaller implements Marshaller<Timestamp> {

  @Override
  public Class<Timestamp> getTypeHandled() {
    return Timestamp.class;
  }

  @Override
  public String getEncodingType() {
    return "json";
  }

  @Override
  public String marshall(Timestamp o, MarshallingSession ctx) {
    if (o == null) {
      return "null";
    }

    return "{\"" + SerializationParts.ENCODED_TYPE + "\":\"" + Timestamp.class.getName() + "\"," +
            "\"" + SerializationParts.OBJECT_ID + "\":\"" + o.hashCode() + "\"," +
            "\"" + SerializationParts.QUALIFIED_VALUE + "\":\"" + o.getTime() + "\"}";
  }
}
