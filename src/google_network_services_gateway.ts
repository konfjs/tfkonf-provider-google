import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkServicesGatewayArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkServicesGatewayArgs {
  certificate_urls?: string[];
  delete_swg_autogen_router_on_destroy?: boolean;
  description?: string;
  gateway_security_policy?: string;
  labels?: { [key: string]: string };
  location?: string;
  name: string;
  network?: string;
  ports: number[];
  routing_mode?: string;
  scope?: string;
  server_tls_policy?: string;
  subnetwork?: string;
  type: string;
  timeouts?: GoogleNetworkServicesGatewayArgsTimeouts;
}

export class google_network_services_gateway extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkServicesGatewayArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_services_gateway", resourceName);
  }

  get addresses(): string {
    return `${this.resourceType}.${this.resourceName}.addresses`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get ports(): string {
    return `${this.resourceType}.${this.resourceName}.ports`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
