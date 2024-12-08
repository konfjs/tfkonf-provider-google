import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEndpointsServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEndpointsServiceArgs {
  grpc_config?: string;
  openapi_config?: string;
  protoc_output_base64?: string;
  service_name: string;
  timeouts?: GoogleEndpointsServiceArgsTimeouts;
}

export class google_endpoints_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_endpoints_service", resourceName);
  }

  get apis(): string {
    return `${this.resourceType}.${this.resourceName}.apis`;
  }

  get config_id(): string {
    return `${this.resourceType}.${this.resourceName}.config_id`;
  }

  get dns_address(): string {
    return `${this.resourceType}.${this.resourceName}.dns_address`;
  }

  get endpoints(): string {
    return `${this.resourceType}.${this.resourceName}.endpoints`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }
}
