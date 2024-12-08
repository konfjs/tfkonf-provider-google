import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunServiceArgsMetadata {
  annotations?: { [key: string]: string };
  labels?: { [key: string]: string };
}

export interface GoogleCloudRunServiceArgsTemplateMetadata {
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersEnvValueFromSecretKeyRef {
  key: string;
  name: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersEnvValueFrom {
  secret_key_ref: GoogleCloudRunServiceArgsTemplateSpecContainersEnvValueFromSecretKeyRef;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersEnv {
  name?: string;
  value?: string;
  value_from?: GoogleCloudRunServiceArgsTemplateSpecContainersEnvValueFrom;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference {
  name: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersEnvFromConfigMapRef {
  optional?: boolean;
  local_object_reference?: GoogleCloudRunServiceArgsTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersEnvFromSecretRefLocalObjectReference {
  name: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersEnvFromSecretRef {
  optional?: boolean;
  local_object_reference?: GoogleCloudRunServiceArgsTemplateSpecContainersEnvFromSecretRefLocalObjectReference;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersEnvFrom {
  prefix?: string;
  config_map_ref?: GoogleCloudRunServiceArgsTemplateSpecContainersEnvFromConfigMapRef;
  secret_ref?: GoogleCloudRunServiceArgsTemplateSpecContainersEnvFromSecretRef;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersLivenessProbeGrpc {
  service?: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersLivenessProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersLivenessProbeHttpGet {
  path?: string;
  http_headers?: GoogleCloudRunServiceArgsTemplateSpecContainersLivenessProbeHttpGetHttpHeaders[];
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersLivenessProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc?: GoogleCloudRunServiceArgsTemplateSpecContainersLivenessProbeGrpc;
  http_get?: GoogleCloudRunServiceArgsTemplateSpecContainersLivenessProbeHttpGet;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersPorts {
  container_port?: number;
  protocol?: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersResources {
  requests?: { [key: string]: string };
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbeGrpc {
  service?: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbeHttpGet {
  path?: string;
  http_headers?: GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbeHttpGetHttpHeaders[];
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbeTcpSocket {
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc?: GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbeGrpc;
  http_get?: GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbeHttpGet;
  tcp_socket?: GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbeTcpSocket;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainersVolumeMounts {
  mount_path: string;
  name: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecContainers {
  args?: string[];
  command?: string[];
  image: string;
  working_dir?: string;
  env?: GoogleCloudRunServiceArgsTemplateSpecContainersEnv[];
  env_from?: GoogleCloudRunServiceArgsTemplateSpecContainersEnvFrom[];
  liveness_probe?: GoogleCloudRunServiceArgsTemplateSpecContainersLivenessProbe;
  ports?: GoogleCloudRunServiceArgsTemplateSpecContainersPorts[];
  resources?: GoogleCloudRunServiceArgsTemplateSpecContainersResources;
  startup_probe?: GoogleCloudRunServiceArgsTemplateSpecContainersStartupProbe;
  volume_mounts?: GoogleCloudRunServiceArgsTemplateSpecContainersVolumeMounts[];
}

export interface GoogleCloudRunServiceArgsTemplateSpecVolumesCsi {
  driver: string;
  volume_attributes?: { [key: string]: string };
}

export interface GoogleCloudRunServiceArgsTemplateSpecVolumesEmptyDir {
  medium?: string;
  size_limit?: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecVolumesNfs {
  path: string;
  read_only?: boolean;
  server: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecVolumesSecretItems {
  key: string;
  mode?: number;
  path: string;
}

export interface GoogleCloudRunServiceArgsTemplateSpecVolumesSecret {
  default_mode?: number;
  secret_name: string;
  items?: GoogleCloudRunServiceArgsTemplateSpecVolumesSecretItems[];
}

export interface GoogleCloudRunServiceArgsTemplateSpecVolumes {
  name: string;
  csi?: GoogleCloudRunServiceArgsTemplateSpecVolumesCsi;
  empty_dir?: GoogleCloudRunServiceArgsTemplateSpecVolumesEmptyDir;
  nfs?: GoogleCloudRunServiceArgsTemplateSpecVolumesNfs;
  secret?: GoogleCloudRunServiceArgsTemplateSpecVolumesSecret;
}

export interface GoogleCloudRunServiceArgsTemplateSpec {
  containers?: GoogleCloudRunServiceArgsTemplateSpecContainers[];
  volumes?: GoogleCloudRunServiceArgsTemplateSpecVolumes[];
}

export interface GoogleCloudRunServiceArgsTemplate {
  metadata?: GoogleCloudRunServiceArgsTemplateMetadata;
  spec?: GoogleCloudRunServiceArgsTemplateSpec;
}

export interface GoogleCloudRunServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudRunServiceArgsTraffic {
  latest_revision?: boolean;
  percent: number;
  revision_name?: string;
  tag?: string;
}

export interface GoogleCloudRunServiceArgs {
  autogenerate_revision_name?: boolean;
  location: string;
  name: string;
  metadata?: GoogleCloudRunServiceArgsMetadata;
  template?: GoogleCloudRunServiceArgsTemplate;
  timeouts?: GoogleCloudRunServiceArgsTimeouts;
  traffic?: GoogleCloudRunServiceArgsTraffic[];
}

export class google_cloud_run_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudRunServiceArgs) {
    const meta = {metadata:{isBlock:true},template:{isBlock:true,metadata:{isBlock:true},spec:{isBlock:true,containers:{isBlock:true,env:{isBlock:true,value_from:{isBlock:true,secret_key_ref:{isBlock:true}}},env_from:{isBlock:true,config_map_ref:{isBlock:true,local_object_reference:{isBlock:true}},secret_ref:{isBlock:true,local_object_reference:{isBlock:true}}},liveness_probe:{isBlock:true,grpc:{isBlock:true},http_get:{isBlock:true,http_headers:{isBlock:true}}},ports:{isBlock:true},resources:{isBlock:true},startup_probe:{isBlock:true,grpc:{isBlock:true},http_get:{isBlock:true,http_headers:{isBlock:true}},tcp_socket:{isBlock:true}},volume_mounts:{isBlock:true}},volumes:{isBlock:true,csi:{isBlock:true},empty_dir:{isBlock:true},nfs:{isBlock:true},secret:{isBlock:true,items:{isBlock:true}}}}},timeouts:{isBlock:true},traffic:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_run_service", resourceName);
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

  get status(): string {
    return `${this.resourceType}.${this.resourceName}.status`;
  }
}
