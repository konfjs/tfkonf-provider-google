import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleApigeeEndpointAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleApigeeEndpointAttachmentArgs {
  endpoint_attachment_id: string;
  location: string;
  org_id: string;
  service_attachment: string;
  timeouts?: GoogleApigeeEndpointAttachmentArgsTimeouts;
}

export class google_apigee_endpoint_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleApigeeEndpointAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_apigee_endpoint_attachment", resourceName);
  }

  get connection_state(): string {
    return `${this.resourceType}.${this.resourceName}.connection_state`;
  }

  get endpoint_attachment_id(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_attachment_id`;
  }

  get host(): string {
    return `${this.resourceType}.${this.resourceName}.host`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get org_id(): string {
    return `${this.resourceType}.${this.resourceName}.org_id`;
  }

  get service_attachment(): string {
    return `${this.resourceType}.${this.resourceName}.service_attachment`;
  }
}
