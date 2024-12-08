import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIntegrationConnectorsEndpointAttachmentArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleIntegrationConnectorsEndpointAttachmentArgs {
  description?: string;
  endpoint_global_access?: boolean;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  service_attachment: string;
  timeouts?: GoogleIntegrationConnectorsEndpointAttachmentArgsTimeouts;
}

export class google_integration_connectors_endpoint_attachment extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIntegrationConnectorsEndpointAttachmentArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_integration_connectors_endpoint_attachment", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get endpoint_ip(): string {
    return `${this.resourceType}.${this.resourceName}.endpoint_ip`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_attachment(): string {
    return `${this.resourceType}.${this.resourceName}.service_attachment`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
